import { Link, Stack, Tag, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

class CurrentDate extends Component {
    render() {

        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return (
            <div>
                <Stack spacing={3}>

                    <Text fontSize="md">
                        Data: {day}/{month}/{year}
                    </Text>

                    <Text fontSize="md">
                        <Tag size="lg">
                            Made by <Link href="https://github.com/LucasHBG" marginLeft='5px' color='tomato' isExternal> @LucasHBG </Link>

                        </Tag>
                    </Text>
                </Stack>

            </div >
        )
    }

}

export default CurrentDate;
