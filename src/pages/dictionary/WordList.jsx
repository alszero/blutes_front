import React from 'react';
import styled from 'styled-components';
import Header from "../Header.js";

const Container = styled.div`
  margin-top: 8%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
  grid-gap: 20px; /* 카드 간격 조정 */
`;

const Card = styled.div`
  align-item; center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Word = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Meaning = styled.p`
  margin-bottom: 10px;
  color: #555;
`;

const Sentence = styled.p`
  color: #777;
`;

const WordList = () => {
  // 단어 데이터 배열
  const words = [
    {
      id: 1,
      word: 'Word 1',
      meaning: 'Meaning 1',
      sentence: 'Example sentence 1',
    },
    {
      id: 2,
      word: 'Word 2',
      meaning: 'Meaning 2',
      sentence: 'Example sentence 2',
    },
    {
      id: 3,
      word: 'Word 3',
      meaning: 'Meaning 3',
      sentence: 'Example sentence 3',
    },
    {
      id: 4,
      word: 'Word 4',
      meaning: 'Meaning 4',
      sentence: 'Example sentence 4',
    },
    {
      id: 5,
      word: 'Word 5',
      meaning: 'Meaning 5',
      sentence: 'Example sentence 5',
    },
    {
      id: 6,
      word: 'Word 6',
      meaning: 'Meaning 6',
      sentence: 'Example sentence 6',
    },
    {
      id: 7,
      word: 'Word 7',
      meaning: 'Meaning 7',
      sentence: 'Example sentence 7',
    },
    {
      id: 8,
      word: 'Word 8',
      meaning: 'Meaning 8',
      sentence: 'Example sentence 8',
    },
  ];

  return (
    <>
    <Header/>
    <Container>
      {words.map((word) => (
        <Card key={word.id}>
          <Word>{word.word}</Word>
          <Meaning>{word.meaning}</Meaning>
          <Sentence>{word.sentence}</Sentence>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default WordList;
