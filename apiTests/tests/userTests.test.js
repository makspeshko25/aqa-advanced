import petsActions from "../apiMethods/petsActions";
import getRandomPetData from "../data/data";

let petId;

describe ("Test suite 1", ()=> {
    test ("Create a pet", async ()=>{
        try {
            const petData = getRandomPetData();
            console.log("Sent Pet Data:", JSON.stringify(petData, null, 2));
    
            const response = await petsActions.createPet(petData);
            console.log("Received Response Data:", JSON.stringify(response.data, null, 2));
    
            console.log("Checking response status...");
            expect(response.status).toBe(200);
            console.log("Status is correct");
    
            console.log("Checking if response contains 'id'...");
            expect(response.data).toHaveProperty("id");
            console.log("Response contains 'id'");
    
            console.log("Checking if response contains 'name'...");
            expect(response.data).toHaveProperty("name");
            console.log("Response contains 'name'");
    
            console.log("Checking if response contains 'status'...");
            expect(response.data).toHaveProperty("status");
            console.log("Response contains 'status'");
    
            console.log(`Checking if name matches (${response.data.name} === ${petData.name})...`);
            expect(response.data.name).toBe(petData.name);
            console.log("Name matches");
    
            console.log(`Checking if status matches (${response.data.status} === ${petData.status})...`);
            expect(response.data.status).toBe(petData.status);
            console.log("Status matches");
    
            console.log(`Checking if category ID matches (${response.data.category.id} === ${petData.category.id})...`);
            expect(response.data.category.id).toBe(petData.category.id);
            console.log("Category ID matches");
    
            console.log(`Checking if category name matches (${response.data.category.name} === ${petData.category.name})...`);
            expect(response.data.category.name).toBe(petData.category.name);
            console.log("Category name matches");

            petId = response.data.id;
            console.log(`Pet created with ID: ${petId}`);
        } 
        catch (error) {
        console.error("Error creating pet:", error.response?.data || error.message);
        throw error;
        }
    });
    test ("Get a pet", async ()=> {
        try {
            if (!petId) throw new Error("petId is not set from previous test");

        console.log("Waiting before retrieving pet...");
        await new Promise((resolve) => setTimeout(resolve, 4000));

        const response = await petsActions.getPet(petId);
        console.log("Pet retrieved:", response.data);
        
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(petId);
        } 
        catch (error) {
        console.error("Error getting a pet by ID:", error.response?.data || error.message);
        throw error;
        }
    })
});

