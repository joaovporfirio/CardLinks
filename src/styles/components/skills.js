import styled from "styled-components";

export const Skill = styled.div`
.skills-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
    color: ${props => props.theme.colors.third};

}

h2 {
    margin-top:1rem;
    color: ${props => props.theme.colors.third};
}

.techonology-icon {
    display: flex;
    align-items: center;
}

.techonology-icon svg {
    font-size: 30px;
}

#html svg {

    color: #e44d26;
}

#css svg {

    color: #1572b6;
}

#js svg {

    color: #f0db4f;
}

#react svg {
    color: #61dafb;
}



@media (max-width:643px) {
    .skills-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

}
`