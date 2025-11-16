import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 260px;
  padding: 16px;
  border-radius: 16px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
;

const StyledAvatar = styled.img
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 12px;
;

const ProfileCardStyled = ({ avatar, name, bio }) => (
  <StyledCard>
    <StyledAvatar src={avatar} />
    <h2>{name}</h2>
    <p>{bio}</p>
  </StyledCard>
)`;

export default ProfileCardStyled;