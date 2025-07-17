const shabbatBoxOptions = [
    {
        category: "FRIDAY NIGHT DINNER",
        options: [
            {
                name: "SHABBAT ELEGANCE (FRIDAY NIGHT DINNER)",
                includes: [
                    "2 shabbat tea candles",
                    "1 bottle kidush wine",
                    "2 Challah",
                    "Elegant plastic serve wear",
                    "3 dips",
                    "3 salads",
                    "Fish (Moroccan fish or teriyaki salmon)",
                    "Meat balls",
                    "Roasted chicken",
                    "Rice",
                    "Roasted potatoes or veggies",
                    "Cake for desert (vanilla or chocolate)"
                ],
                servingSize: "Two people",
                basePrice: 220.00,
                additionalGuestPrice: 100.00,
                quantity: 0
            },
            {
                name: "SHABBAT PRESTIGE (FRIDAY NIGHT DINNER)",
                includes: [
                    "2 shabbat tea candles",
                    "1 bottle dry wine",
                    "2 Challah",
                    "Elegant plastic serve wear",
                    "3 dips",
                    "4 salads",
                    "Fish (Moroccan fish or teriyaki salmon)",
                    "Fine meat dish",
                    "Meat balls",
                    "Roasted chicken",
                    "Rice",
                    "Roasted potatoes",
                    "Cake for desert (vanilla or chocolate)"
                ],
                servingSize: "Two people",
                basePrice: 270.00,
                additionalGuestPrice: 110.00,
            }
        ]
    },
    {
        category: "SHABBAT LUNCH",
        options: [
            {
                name: "SHABBAT ELEGANCE (SHABBAT LUNCH)",
                includes: [
                    "1 bottle Kidush wine",
                    "2 Challah",
                    "Elegant plastic serve wear",
                    "3 dips",
                    "3 salads",
                    "Tuna salad",
                    "Shnitzel fingers",
                    "Potato kugel",
                    "Cake for desert (vanilla or chocolate)"
                ],
                servingSize: "Two people",
                basePrice: 200.00,
                additionalGuestPrice: 87.00,
            },
            {
                name: "SHABBAT PRESTIGE (SHABBAT LUNCH)",
                includes: [
                    "1 bottle dry wine",
                    "2 Challah",
                    "Elegant plastic serve wear",
                    "3 dips",
                    "3 salads",
                    "Tuna salad",
                    "Smoked Salmon",
                    "Shnitzel fingers",
                    "Potato kugel",
                    "Cold cuts",
                    "Cake for desert (vanilla or chocolate)"
                ],
                servingSize: "Two people",
                basePrice: 250.00,
                additionalGuestPrice: 110.00,
            }
        ]
    },
    {
        category: "MORE OPTIONS",
        options: [
            {
                name: "Hotplate rental",
                description: "+70 deposit",
                basePrice: 100.00,
                details: "$30 rental + $70 deposit",
                servingSize: "-"
            },
            {
                name: "Cholent + Crockpot",
                description: "The cholent comes raw in the crockpot with all ingredients and condiments. It's so easy, you just have to add water and plug in. The crockpot will be yours",
                variants: [
                    {
                        size: "Small",
                        serves: "2-3 people",
                        price: 100.00,
                        quantity: 0
                    },
                    {
                        size: "Medium",
                        serves: "4-6 people",
                        price: 140.00,
                    },
                    {
                        size: "Large",
                        serves: "8-10 people",
                        price: 180.00,
                    }
                ]
            }
        ]
    }
];

async function seedShabbatBoxData() {
    const baseURL = 'http://localhost:1337/api';
    const endpoint = '/shabbat-boxes';
    
    console.log('📦 Starting Shabbat Box data seeding...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < shabbatBoxOptions.length; i++) {
        const entry = shabbatBoxOptions[i];
        
        try {
            console.log(`📋 Creating category ${i + 1}/3: ${entry.category}`);
            
            // Convert includes arrays to markdown format
            const processedOptions = entry.options.map(option => ({
                ...option,
                includes: option.includes ? option.includes.map(item => `- ${item}`).join('\n') : undefined
            }));

            const response = await fetch(`${baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        category: entry.category,
                        options: processedOptions,
                        active: true,
                        order: i + 1
                    }
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP ${response.status}: ${JSON.stringify(errorData)}`);
            }
            
            const result = await response.json();
            console.log(`✅ Successfully created: ${entry.category} (ID: ${result.data.id})`);
            console.log(`   📝 Added ${entry.options.length} options`);
            successCount++;
            
        } catch (error) {
            console.log(`❌ Error creating ${entry.category}:`, error.message);
            errorCount++;
        }
        
        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log('\n🎉 Shabbat Box seeding completed!');
    console.log(`✅ Successfully created: ${successCount} categories`);
    console.log(`❌ Errors: ${errorCount} categories`);
    
    if (errorCount > 0) {
        console.log('\n💡 If you got errors, make sure:');
        console.log('   - Strapi is running on http://localhost:1337');
        console.log('   - The "Shabbat Box" content type exists');
        console.log('   - The content type has public create permissions');
        console.log('   - Run: Settings → Users & Permissions → Roles → Public → Shabbat-box → ✓ create');
    } else {
        console.log('\n🍽️ Your Shabbat Box menu is now ready!');
        console.log('   Check the admin panel to see all categories and options.');
    }
}

// Execute the seeding
seedShabbatBoxData().catch(console.error);