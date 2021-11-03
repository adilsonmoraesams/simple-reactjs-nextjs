import { Grid, ListItem, List, ListItemText, Paper, TextField, ListItemSecondaryAction, IconButton, Button } from '@material-ui/core';
import Head from 'next/head';
import { useState } from 'react';

import {RecipeService} from './../../services/RecipeService';


export default function Cadastro() {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [servings, setServings] = useState('');
    const [time, setTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newDirections, setNewDirections] = useState('');
    const [directions, setDirections] = useState([]);



    function resetForm() {
        setName('');
        setImg('');
        setCategory('');
        setServings('');
        setTime('');
        setNewIngredient('');
        setIngredients([]);
        setNewDirections('');
        setDirections([]);
    }

    // Receitas
    async function addRecipe() {

        const filedsLegth = [
            name,
            img,
            category,
            servings,
            time,
            ingredients,
            directions
        ].map(item => item.length);

        if (filedsLegth.includes(0)) {
            alert("existe algo vazio");
            return false;
        }

        const newRecipe = await RecipeService.create({
            name,
            img,
            category,
            servings,
            time,
            ingredients,
            directions
        });
  

        console.log(newRecipe);
        // resetForm();

    }

    // Ingrediente
    function addIngredient() {
        if (newIngredient && ingredients.indexOf(newIngredient) === -1) {
            setIngredients([...ingredients, newIngredient]);
            setNewIngredient('');

        }
    }

    function removeIngredient(ingredientToRemove) {
        setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
    }


    // Modo de Preparo
    function addDirection() {
        if (newDirections && directions.indexOf(newDirections) === -1) {
            setDirections([...directions, newDirections]);
            setNewDirections('');

        }
    }

    function removeDirection(directionToRemove) {
        setIngredients(directions.filter(direction => direction !== directionToRemove));
    }



    return (
        <div>
            <Head>
                <title>Cadastro de receitas</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>

            <h1>Cadastro de Receita</h1>

            <Paper>
                <Grid container style={{ margin: '24px auto', maxWidth: '800px', padding: '12px' }} >
                    <Grid item xs={12}>
                        <img width={250} src={img} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Imagem" value={img} onChange={event => setImg(event.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Nome" value={name} onChange={event => setName(event.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Categoria" value={category} onChange={event => setCategory(event.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Tempo de Preparo" value={time} onChange={event => setTime(event.target.value)} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Rendimento" value={servings} onChange={event => setServings(event.target.value)} fullWidth />
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12}>
                            <h2>Ingredientes</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                {ingredients.map(ingredient => (
                                    <ListItem key={ingredient} >
                                        <ListItemText>{ingredient}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" color={'secondary'} onClick={() => removeIngredient(ingredient)} >
                                                X
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={10}>
                            <TextField label="Novo Ingrediente" value={newIngredient} onChange={event => setNewIngredient(event.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant={'outlined'} onClick={addIngredient} >
                                Adicionar
                            </Button>
                        </Grid>
                    </Grid>


                    {/******************************** MODO DE PREPARO ********************************/}

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12}>
                            <h2>Modo de Preparo</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                {directions.map(direction => (
                                    <ListItem key={direction} >
                                        <ListItemText>{direction}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" color={'secondary'} onClick={() => removeDirection(direction)} >
                                                X
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={10}>
                            <TextField label="Novo Ingrediente" value={newDirections} onChange={event => setNewDirections(event.target.value)} fullWidth />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant={'outlined'} onClick={addDirection} >
                                Adicionar
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justifyContent={'center'} spacing={2}>
                        <Grid item>
                            <Button onClick={resetForm}>Reiniciar</Button>
                        </Grid>
                        <Grid item>
                            <Button color="primary" variant="contained" onClick={addRecipe}>
                                CADASTRAR
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}