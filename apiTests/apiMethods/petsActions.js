import apiClient from "./apiClient";
import getRandomPetData from "../data/data.js";


class PetAction {
  async createPet(petData) { 
    return await apiClient.post("/pet", petData);
  }

  async getPet(petId) {
    return await apiClient.get(`/pet/${petId}`);
  }

  async deletePet(petId) {
    return await apiClient.delete(`/pet/${petId}`);
  }
}

export default new PetAction();