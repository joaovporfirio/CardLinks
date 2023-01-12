import styled from "styled-components";

export const Contacts = styled.div`

.info-container {
    margin-bottom: 1rem;
}

.info-individual {
    display: flex;
    color: ${props => props.theme.colors.third};
    margin-bottom: 0.6em;
    align-items: center;
    font-weight: 400;
    text-decoration: none;
    font-size: 15px;
    

}

.info-individual svg {
    font-size: 30px;
    margin-right: 10px;
    
}
`