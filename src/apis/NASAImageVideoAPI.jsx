// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   StyleSheet,
// } from "react-native";
// import { Iconify } from "react-native-iconify";

// const NASAImageVideoAPI = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const fetchSearchResults = async () => {
//     try {
//       const response = await fetch(
//         `https://images-api.nasa.gov/search?q=${searchQuery}`
//       );
//       const data = await response.json();
//       setSearchResults(data.collection.items.slice(0, 5));
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     <View>
//       <View style={styles.InputContainer}>
//         <Text>Busca alguna weaita cosmica</Text>
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter search query"
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           <TouchableOpacity
//             style={styles.searchButton}
//             onPress={fetchSearchResults}
//           >
//             <Iconify
//               icon="streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy"
//               size={20}
//               color="#fff"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.ResultsContainer}>
//         <FlatList
//           data={searchResults}
//           horizontal
//           contentContainerStyle={styles.flatListContainer}
//           keyExtractor={(item) => item.data[0].nasa_id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image
//                 source={{ uri: item.links[0].href }}
//                 style={styles.Image}
//               />
//               <Text style={styles.Title}>{item.data[0].title}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// export default NASAImageVideoAPI;

// const styles = StyleSheet.create({
//   InputContainer: {
//     width: "100%",
//     padding: 15,
//   },

//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   input: {
//     borderWidth: 1,
//     padding: 8,
//     marginRight: 8,
//     flex: 1,
//   },

//   searchButton: {
//     backgroundColor: "#900",
//     padding: 8,
//     borderRadius: 5,
//   },

//   ResultsContainer: {
//     width: "100%",
//   },

//   flatListContainer: {
//     padding: 10,
//     columnGap: 15,
//   },

//   card: {
//     width: 300,
//     borderRadius: 8,
//     backgroundColor: "white",
//     elevation: 4,
//     padding: 10,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   },

//   Image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//   },

//   Title: {
//     fontSize: 13,
//     fontWeight: "500",
//     marginTop: 8,
//   },
// });

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  margin-right: 8px;
  flex: 1;
`;

const SearchButton = styled.button`
  background-color: #900;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: white;
`;

const ResultsContainer = styled.div`
  width: 100%;
`;

const FlatListContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 15px;
`;

const Card = styled.div`
  width: 300px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.collection.items.slice(0, 5));
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <Container>
      <InputContainer>
        <Title>Busca alguna weaita cosmica</Title>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <SearchButton onClick={fetchSearchResults}>Search</SearchButton>
        </SearchContainer>
      </InputContainer>
      <ResultsContainer>
        <FlatListContainer>
          {searchResults.map((item) => (
            <Card key={item.data[0].nasa_id}>
              <Image src={item.links[0].href} alt={item.data[0].title} />
              <p>{item.data[0].title}</p>
            </Card>
          ))}
        </FlatListContainer>
      </ResultsContainer>
    </Container>
  );
};

export default App;
