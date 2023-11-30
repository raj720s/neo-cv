require('../app')

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    } finally {
        await sequelize.close(); // Close the connection
    }
}

syncDatabase();