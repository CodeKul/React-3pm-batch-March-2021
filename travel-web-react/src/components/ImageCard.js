import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"

import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import {Collapse} from "@material-ui/core"
import { lightBlue } from '@material-ui/core/colors'


const useStyles = makeStyles({
    root:{
        maxWidth:645,
        background: "rgba(0,0,0,0.5)",
        margin: "20px",
    },

    media:{
        height:400,
    },

    title:{
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "2rem",
        color: lightBlue,
    },

    desc:{
        fontFamily: "Nunito",
        fontSize: "1.1rem",
        color: "#ddd",
    }
});



export default function ImageCard({place, checked}) {

    const classes = useStyles();
    return (
        <Collapse in={checked} {...(checked ? {timeout:1000} : {})}>
            <Card className={classes.root}>

                <CardMedia
                className={classes.media}
                image={place.imageUrl}
                title="Contemplstive Reptile"/>
                

                </Card>
        </Collapse>
    )
}
