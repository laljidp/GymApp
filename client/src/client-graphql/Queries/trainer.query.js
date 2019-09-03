import gql from 'graphql-tag'

export const fetchTrainers = gql`
    query($limit: Int!, $skip: Int!) {
        trainers(limit: $limit, skip: $skip){
            id
            name
            specialist
        }
    }
`

export const createTrainer = gql`
    mutation($trainer: trainerData){
        createTrainer(input:$trainer){
            id
            name
            specialist
        }
    }
`
