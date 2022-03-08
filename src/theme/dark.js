import { extendTheme } from '@chakra-ui/react'

const themeDark = extendTheme({
    styles: {
        global: {
            body: {
                backgroundImage: "url('https://res.cloudinary.com/sarapalacio01/image/upload/v1646698711/Reto2-Sprint3/bg-desktop-dark_l6xeef.jpg')",
                backgroundPosition: "cover",
                backgroundRepeat: "no-repeat",
                bg: 'gray.800'
            },
            input: {
                bg: 'gray.800',
                color: 'white',
                width: '100%',
                height: '100%',
                margin: 'auto',
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: 'lg',
            },
            button: {
                color: 'white'
            }
        }
    }

});

export default themeDark;

