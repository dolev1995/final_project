import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GradeIcon from '@mui/icons-material/Grade';
export const SidebarData =[
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home"
    },
 
    {
        title: "Test21",
        icon: <QuestionAnswerIcon />,
        link: "/Class"
    },
    {
        title: "Grade",
        icon: <GradeIcon />,
        link: "/Grade"
    },
    {
        title: "Profile",
        icon: <AccountBoxIcon />,
        link: "/Profile"
    },
]
