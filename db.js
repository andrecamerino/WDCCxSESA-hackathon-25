import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongoDB');
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to mongoDB');
    }
}

export default connect;