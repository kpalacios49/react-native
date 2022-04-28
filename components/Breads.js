import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


const Bread = ({ data, handleCLick }) => {

    return (
        <Card>
            <Card.Content>
                <Title>{data.name}</Title>
                <Paragraph>{data.description}</Paragraph>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Button icon="camera" mode="contained" onPress={() => handleCLick(data.id)}>
                Ver
            </Button>
        </Card>
    )
};

export default Bread;