import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./useStyles";

interface CardProps {
  id: string;
  title: string;
  onArticleClick: () => void;
}

const ArticleCard = ({ id, title, onArticleClick }: CardProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card} onClick={onArticleClick}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
