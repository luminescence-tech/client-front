import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { Flex, Grid, GridItem, Box, Text, border } from "@chakra-ui/react";
import axios from "axios";

import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Spinner,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';

export default function InstructionsComponent() {
	const router = useRouter();
	const [isLoading, setLoading] = useState(false);
	const [cyn, setCYN] = React.useState(0);
	const [euro, setEURO] = React.useState(0);
	const [usd, setUSD] = React.useState(0);

	const usdp = "https://api.exchangerate.host/latest?base=RUB&symbols=USD";
	const europ = "https://api.exchangerate.host/latest?base=RUB&symbols=EURO";
	const cynp = "https://api.exchangerate.host/latest?base=RUB&symbols=CYN";

	React.useEffect(() => {
		axios.get(usdp).then((response) => {
			console.log("USD: ", response.data.rates.USD)
			setUSD(response.data);
		});

		axios.get(europ).then((response) => {
			console.log("EURO: ", response.data.rates.EUR);
			setEURO(response.data.rates.EUR);
		});

		axios.get(cynp).then((response) => {
			console.log("CNY: ", response.data.rates.CNY)
			setCYN(response.data.rates.CNY);
		});
	}, []);

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	function getPrices() {

		axios.get(usdp).then((response) => {
			console.log("USD: ", response.data.rates.USD)
			setUSD(response.data.rates.USD);
		});

		axios.get(europ).then((response) => {
			console.log("EURO: ", response.data.rates.EUR);
			setEURO(response.data.rates.EUR);
		});

		axios.get(cynp).then((response) => {
			console.log("CNY: ", response.data.rates.CNY)
			setCYN(response.data.rates.CNY);
		});
	}

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	const handleClick = () => {
		getPrices();
		setLoading(true)
	};

	if (!usd) return null;
	if (!euro) return null;
	if (!cyn) return null;



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
				<GridItem rowSpan={2} colSpan={1}>
					<Button colorScheme='white' variant='outline' onClick={!isLoading ? handleClick : null}>
						Get Prices
					</Button>
				</GridItem>

				{isLoading ? 'Loading…' : <GridItem colSpan={4} border='1px' borderColor='gray.200' >
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
									<Td>{usd == 0 ? "0" : usd.toString()}</Td>
									<Td isNumeric>04/25/2023</Td>
								</Tr>
								<Tr>
									<Td>RU-EURO</Td>
									<Td>{euro == 0 ? "0" : euro.toString()}</Td>
									<Td isNumeric>04/25/2023</Td>
								</Tr>
								<Tr>
									<Td>RU-CNY</Td>
									<Td>{cyn == 0 ? "0" : cyn.toString()}</Td>
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
					</TableContainer>
				</GridItem>}



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
