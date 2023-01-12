import styled from "styled-components";

export const Container = styled.div`
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondary}  ;
    width: 500px;
    height: 600px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    padding: 40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    
}



.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    color: ${props => props.theme.colors.third};
    
}
.header h1{
    font-size: 20px;
}

.header h3{
    font-size: 15px;
}

.header h1, .header h3 {
    text-align: center;
}


.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    
}

.avatar #avatar-img {
    width: 100px;
    height: auto;
    border-radius: 100%;
    
}


@media (max-width:643px) {
    .container {
        width: 400px;
        height: 680px;
        padding: 40px;
    }
    
    .avatar {
        width: 130px;
        height: 130px;        
    }
    
    .avatar #avatar-img {
        width: 120px;
    }
        
}

@media (max-width:447px) {
    .container {
        width: 360px;
        height: 680px;
        padding: 40px;
    }

    .header h1{
        font-size: 20px;
    }

    .header h1, .header h3 {
        text-align: center;
    }
    
    .avatar {
        width: 90px;
        height: 90px;        
    }
    
    .avatar #avatar-img {
        width: 80px;
    }
        
}
`