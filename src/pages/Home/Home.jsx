import Box from "shared/Box/Box";
import { Title } from "./Home.styled";



export default function Home() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      minHeight='calc(100vh - 50px)'
    >
      <Title>
        CREATE YOUR<br />OWN PHONEBOOK
      </Title>
    </Box>
  )
}
