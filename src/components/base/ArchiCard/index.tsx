"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface ArchiCardProps {
    className?: string;
    coverImage?: {
        src: string;
        alt: string;
        height: string;
        width?: string;
    };
    children?: React.ReactNode;
    ripple?: boolean;
}

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ArchiCard({
    className,
    coverImage,
    children,
    ripple = true
}: ArchiCardProps) {

    return (
        <Card className={className}>
            <CardActionArea>
                <Item>
                    {(coverImage) && (
                        <CardMedia
                            component="img"
                            width={coverImage.width}
                            height={coverImage.height}
                            image={coverImage.src}
                            alt={coverImage.alt}
                        />
                    )}
                    <CardContent>
                        {children}
                    </CardContent>
                </Item>
            </CardActionArea>
        </Card>
    );
}