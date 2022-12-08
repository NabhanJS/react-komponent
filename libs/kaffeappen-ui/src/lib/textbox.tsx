import styled from 'styled-components';

type LoginType = {
    label?: string
    variant?: "Användarnamn" | "Lösenord"
}


const Login =  ({ label, variant }: LoginType) => {
    return ( <div>
                <div>
                    <input type="text" placeholder={variant} />
                </div>

            </div>
    )
}

export default Login;