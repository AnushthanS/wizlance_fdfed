import { createAsyncThunk } from "@reduxjs/toolkit"

const backendUrl = 'http://localhost:3000'
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
            
        }
    }
);

export {
    userLogin
}