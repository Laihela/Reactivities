import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    activity: Activity
}

export default function ActivityCard({activity}:Props) {
    return (
        <Card sx={{borderRadius: 3, backgroundColor:'#201830'}}>
            <CardContent>
                <Typography variant="h5" color="#ffffff">
                    {activity.title}
                </Typography>
                <Typography sx={{color:'#aaaaaa', mb:1}}>
                    {activity.date}
                </Typography>
                <Typography variant="body2" color="#aaaaaa">
                    {activity.description}
                </Typography>
                <Typography variant="subtitle1"color="#aaaaaa">
                    {activity.city} - {activity.venue}
                </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between', pb: 2}}>
                <Chip sx={{backgroundColor:'#40404040',
                    color:'#aaaaaa',
                    borderColor:'#666666'}}
                    label={activity.category}
                    variant="outlined">
                </Chip>
                <Button sx={{backgroundColor:'#a00040',
                color:'#ffffff'}}
                size="medium"
                variant="contained">
                    View
                </Button>
            </CardActions>
        </Card>
    )
}