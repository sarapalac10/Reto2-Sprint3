import { extendTheme } from '@chakra-ui/react'

const themeLight = extendTheme({
    styles: {
        global: {
            body: {
                backgroundImage: "url('https://res.cloudinary.com/sarapalacio01/image/upload/v1646698711/Reto2-Sprint3/bg-desktop-light_n2zw0x.jpg')",
                backgroundPosition: "cover",
                backgroundRepeat: "no-repeat",
                bg: 'gray.50',
                width: '100%',
            },
            input: {
                bg: 'white',
                color: 'black',
                width: '100%',
                height: '100%',
                margin: 'auto',
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: 'lg',
            }
        }
    }

});

export default themeLight;

