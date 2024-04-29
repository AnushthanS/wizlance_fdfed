import { createAsyncThunk } from "@reduxjs/toolkit"

const backendUrl = 'https://wizlance-fdfed.onrender.com'
const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post(
                `${backendUrl}/api/login`,
                { email, password },
                config
            );
        } catch (error) {
            console.log(error); 
        }
    }
);

export {
    userLogin
}