import * as React from "react";
import styled from "styled-components";

import { SectionHeader, SectionContainer, Project } from "@components/layout";

const CompletedProjectsContainer = styled.div`
    display: flex;
    background: #F8F9FB;
    padding: 20px 15px;
    overflow: hidden;
    justify-content: space-around;
`;


const ProjectsButton = styled.button`
    background-color: #F8F9FB;
    display: block;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.2em;
    color: #B8C2D9;
    text-align: center;
    padding: 15px;
    width: 100%;
    text-transform: uppercase;
    transition: background ease-in-out .35s;
    margin-top: 5px;

    &:hover {
        background-color: #eee;
    }
`;

export const CompletedProjects = () => (
    <SectionContainer>
        <SectionHeader  headerText="zrealizowane projekty"
                        subheaderText="Zobacz nasze umiejętności na żywo">        
        </SectionHeader>
        <CompletedProjectsContainer>
            <Project companyName="Microsoft"></Project>
            <Project companyName="Google"></Project>
            <Project companyName="Oracle"></Project>
        </CompletedProjectsContainer>
        <ProjectsButton>przewijaj dalej</ProjectsButton>
    </SectionContainer>
);