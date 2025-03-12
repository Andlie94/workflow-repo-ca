import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); 

test('Navigates to the home page and opens first venue', async ({ page }) => {
    const baseUrl = process.env.BASE_URL; 

    if (!baseUrl) {
        throw new Error("BASE_URL is not defined in the .env file");
    }

    
    await page.goto(baseUrl); 

    
    const venueList = page.locator('#venue-container'); 
    await expect(venueList).toBeVisible();

    
    const firstVenue = page.locator('#venue-container a').first();
    await firstVenue.click();


    const heading = page.locator('h1'); 
    await expect(heading).toContainText('Venue details'); 
});