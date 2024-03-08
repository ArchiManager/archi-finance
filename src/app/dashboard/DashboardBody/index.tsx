import ArchiCard from '@/components/base/ArchiCard';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

interface DashboardBodyProps {
    className?: string;
}

const DashboardBody = ({
    className
}: DashboardBodyProps) => {
    return (
        <div className={`${className}`}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <ArchiCard className='w-full'>
                        <Typography gutterBottom variant="h5" component="div">
                            Top Left Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Architect is a free and open-source tool for creating, maintaining, and sharing secure enterprise architecture diagrams. It is a cloud-based solution that allows users to create and edit diagrams from any device, anywhere, and at any time. Architect is designed to be easy to use, with an intuitive interface that makes it simple to create professional-looking diagrams. It also includes a range of features that make it easy to collaborate with others, including real-time editing, comments, and version history. Architect is built on a secure and scalable platform, with robust security features that protect your data and ensure that it is always available when you need it. Architect is designed to be flexible, with a range of pricing plans to suit different needs and budgets. Whether you are a small business or a large enterprise, Architect has a plan that is right for you. Try Architect today and see how it can help you create, maintain, and share secure enterprise architecture diagrams.
                        </Typography>
                    </ArchiCard>
                </Grid>
                <Grid item xs={6}>
                    <ArchiCard>
                        <Typography gutterBottom variant="h5" component="div">
                            Top Right Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Architect is a free and open-source tool for creating, maintaining, and sharing secure enterprise architecture diagrams. It is a cloud-based solution that allows users to create and edit diagrams from any device, anywhere, and at any time. Architect is designed to be easy to use, with an intuitive interface that makes it simple to create professional-looking diagrams. It also includes a range of features that make it easy to collaborate with others, including real-time editing, comments, and version history. Architect is built on a secure and scalable platform, with robust security features that protect your data and ensure that it is always available when you need it. Architect is designed to be flexible, with a range of pricing plans to suit different needs and budgets. Whether you are a small business or a large enterprise, Architect has a plan that is right for you. Try Architect today and see how it can help you create, maintain, and share secure enterprise architecture diagrams.
                        </Typography>
                    </ArchiCard>
                </Grid>
                <Grid item xs={6}>
                    <ArchiCard>
                        <Typography gutterBottom variant="h5" component="div">
                            Bottom Left Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Architect is a free and open-source tool for creating, maintaining, and sharing secure enterprise architecture diagrams. It is a cloud-based solution that allows users to create and edit diagrams from any device, anywhere, and at any time. Architect is designed to be easy to use, with an intuitive interface that makes it simple to create professional-looking diagrams. It also includes a range of features that make it easy to collaborate with others, including real-time editing, comments, and version history. Architect is built on a secure and scalable platform, with robust security features that protect your data and ensure that it is always available when you need it. Architect is designed to be flexible, with a range of pricing plans to suit different needs and budgets. Whether you are a small business or a large enterprise, Architect has a plan that is right for you. Try Architect today and see how it can help you create, maintain, and share secure enterprise architecture diagrams.
                        </Typography>
                    </ArchiCard>
                </Grid>
                <Grid item xs={6}>
                    <ArchiCard>
                        <Typography gutterBottom variant="h5" component="div">
                            Bottom Right Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Architect is a free and open-source tool for creating, maintaining, and sharing secure enterprise architecture diagrams. It is a cloud-based solution that allows users to create and edit diagrams from any device, anywhere, and at any time. Architect is designed to be easy to use, with an intuitive interface that makes it simple to create professional-looking diagrams. It also includes a range of features that make it easy to collaborate with others, including real-time editing, comments, and version history. Architect is built on a secure and scalable platform, with robust security features that protect your data and ensure that it is always available when you need it. Architect is designed to be flexible, with a range of pricing plans to suit different needs and budgets. Whether you are a small business or a large enterprise, Architect has a plan that is right for you. Try Architect today and see how it can help you create, maintain, and share secure enterprise architecture diagrams.
                        </Typography>
                    </ArchiCard>
                </Grid>
            </Grid>
        </div>
    )
}
export default DashboardBody;