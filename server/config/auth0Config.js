import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-6vaf1pd07il7f2r7.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck