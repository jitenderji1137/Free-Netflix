import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export default function Search(){
    const { value} = useParams();
    return(
        <Heading>{value}</Heading>
    )
}