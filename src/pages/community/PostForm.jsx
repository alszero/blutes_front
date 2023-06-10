import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header.js';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  max-width: 600px;
  padding: 30px;
  margin-top: -4%;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 18px;
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const TagInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const navigate = useNavigate();

  const handleTagInputChange = (e) => {
    const value = e.target.value;
    const lastChar = value.charAt(value.length - 1);
    if (lastChar === ' ') {
      setTags((prevTags) => prevTags.trim() + '#');
    } else {
      setTags(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, tags });
    setTitle('');
    setContent('');
    setTags('');

    navigate('/community');
  };

  return (
    <div>
      <Header />
      <PageContainer>
        <FormContainer>
          <h2>글 작성</h2>
          <form onSubmit={handleSubmit}>
            <TitleInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <ContentTextarea
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <TagInput
              type="text"
              placeholder="태그"
              value={tags}
              onChange={handleTagInputChange}
            />
            <SubmitButton type="submit">작성하기</SubmitButton>
          </form>
        </FormContainer>
      </PageContainer>
    </div>
  );
}

export default PostForm;
