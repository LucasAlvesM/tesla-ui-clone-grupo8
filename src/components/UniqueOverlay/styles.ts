import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LogoSVG, BurgerSVG } from './iconSVG'

export const Container = styled.div`
position:sticky;
top:0;
left:0;
right:0;
bottom:0;

`

export const Header   = styled.header`

    position:fixed;
    top:0;
    left:0;
    right:0;

    display:flex;
    align-items:center;
    justify-content: space-between;

    padding:0 20px;

    .hidden-table{
            visibility:hidden;
        }


    ul{
       

       
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        

        li {
        list-style:none;
        font-size: 14px;
        
        a{
            text-decoration:none;
            color: black;

            &:hover {
                color:#000;
            }
        }
     }
    }

    margin-bottom:30px;
    @media (min-width: 1000px){
        .hidden-table{
            visibility:visible;
            font-weight:bold;
            letter-spacing:1px;
        }


       ul{
           flex-direction: row;
           

        li  {
            margin: 0 10px;
            padding:8px 16px 8px 0;
           
        }

        

       }
    }

`;

export const Logo  = styled(LogoSVG)`
    
    height:45px;
    cursor:pointer;
    background:url('https://cdn.worldvectorlogo.com/logos/tesla-9.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size:contain;
    width:80px;


`;

export const Burger  = styled(BurgerSVG)`
    width:24px;
    height:24px;
    cursor:pointer;

`;

export const Footer  = styled(motion.footer)`

    position:fixed;
    left:0;
    right:0;
    bottom:0;

    ul{
        margin-left:auto;
        margin-right:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;

        li {
        list-style:none;
        font-size: 14px;
        
        

        & + li{
            margin:0 0 0 0;
            
        }

        & + .hidden{
            visibility:hidden;
        }

        & + .three{
            margin-top:-50px;
        }


        a{
            text-decoration:none;
            color: #393c41;

            &:hover {
                color:#000;
            }
        }
     }
    }

    margin-bottom:30px;
    @media (min-width: 600px){
       margin-bottom:38px; 

       ul{
           flex-direction: row;
           

       

        li  {
            margin: 0 0 0 10px;
            padding:8px 16px 8px 0;

            & + .three{
            margin-top:0;
        }

            & + .hidden{
            visibility:visible;
        }

           
        }

      

       }
    }
`;
