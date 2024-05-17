import { useAuth0 } from '@auth0/auth0-react';


export const generateToken = async () => {



    
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_AUTH0_CLIENT_SECRET
    const url = `https://${domain}/oauth/token`

    const params = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: `https://${domain}/api/v2/`
    })

    const options = {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: params
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    return data
}