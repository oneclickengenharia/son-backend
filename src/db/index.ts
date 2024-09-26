import mongoose from 'mongoose';

class DB {
    public mongooseConnect() {
        mongoose.connect(`mongodb://localhost:27017/SonDB`)
        .then(() => {
            console.log(`server connect MongoDB`);
        }).catch((err) => {
            console.log(`Error connect MongoDB: ${err}`);
        });
    }
}

export default DB;
