import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
export default function Search(){
    const { value} = useParams();
    document.title = `Free Netflix - Search = ${value} - Created BY TRADEmeTRADER as Jitender or Vijay`;
    return(
        <Heading>{value}</Heading>
    )
}