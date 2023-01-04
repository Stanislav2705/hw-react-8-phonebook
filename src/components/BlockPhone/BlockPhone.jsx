import Box from "shared/Box/Box";

const BlockPhone = ({title, children}) => {
  return (
    <Box mb={5}>
      <h2>{title}</h2>
      {children}
    </Box>
  )
}

export default BlockPhone;
