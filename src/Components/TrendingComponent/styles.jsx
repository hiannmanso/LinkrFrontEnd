import styled from "styled-components";


export const TrendingContainer = styled.div`
    box-sizing: border-box;
    width: 301px;
    height: 406px;
    background: #171717;
    border-radius: 16px;
    header{
        box-sizing: border-box;
        p{
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            /* identical to box height */
            height: 40px;
            color: #FFFFFF;width: 95px;
        }   
        width: 301px;
        border-bottom: 1px solid #484848;
        padding:9px 0 12px 16px;
    }
    main{
        p:hover{
            cursor: pointer;
            opacity: 1;
        }
        p{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 19px;
            line-height: 23px;
            letter-spacing: 0.05em;
            
            color: #FFFFFF;
            opacity: 0.8;

        }

    }
    .hashtags{
        padding:22px 0 30px 16px;
        p{
            padding: 5px;
        }
    }
`