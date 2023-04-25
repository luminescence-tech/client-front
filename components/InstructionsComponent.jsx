import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { Flex, Grid, GridItem, Box, Text, border } from "@chakra-ui/react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					blockchain <span>oracle</span>
				</h1>
				<p>
					Request any price from the world's leading {" "}
					<span>Exchanges</span>
				</p>
			</header>

			<Grid
				h='200px'
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(5, 1fr)'
				gap={4}
			>
				<GridItem rowSpan={2} colSpan={1}><Button colorScheme='white' variant='outline'>
					Get Prices
				</Button></GridItem>
				<GridItem colSpan={4} border='1px' borderColor='gray.200' >
					<TableContainer>
						<Table variant='simple'>
							{/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th color={"white"}>Pair</Th>
									<Th color={"white"}>Price</Th>
									<Th isNumeric color={"white"}>Date</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>RU-USD</Td>
									<Td>0.012</Td>
									<Td isNumeric>04/25/2023</Td>
								</Tr>
								<Tr>
									<Td>RU-EURO</Td>
									<Td>0.011</Td>
									<Td isNumeric>04/25/2023</Td>
								</Tr>
								<Tr>
									<Td>RU-CNY</Td>
									<Td>0.085</Td>
									<Td isNumeric>04/25/2023</Td>
								</Tr>
							</Tbody>
							{/* <Tfoot>
								<Tr>
									<Th>To convert</Th>
									<Th>into</Th>
									<Th isNumeric>multiply by</Th>
								</Tr>
							</Tfoot> */}
						</Table>
					</TableContainer></GridItem>
			</Grid>

			<br />
			<div className={styles.footer}>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/alchemyplatform/create-web3-dapp"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/AlchemyPlatform"
							target={"_blank"}
						>
							Follow us on VK
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
