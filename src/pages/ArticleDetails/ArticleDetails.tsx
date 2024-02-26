import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import { fetchArticleById } from "../../Redux/slices/ariclesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getData } from "../../utils/utils";
import { useStyles } from "./useStyles";

function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<any>({});
  const [error, setError] = useState<string>("");
  const styles = useStyles(); 
  //   const selectedArticle = useAppSelector((state) => state?.articles);

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const fetchArticleById = async (id: any) => {
      setLoading(true);
      const response = await getData(
        `https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`
      );
      console.log(response, 'test response')
      setLoading(false);
      setSelectedArticle(response);

      setError("Something went wrong");
      setLoading(false);
      return error;
    };
    fetchArticleById(id);
  }, []);

  return (
    <Card
      className={styles.card}
    >
      {/* <Card /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {selectedArticle?.fullText}
        </Typography>
      </CardContent>
    </Card>
    // </div>
  );
}

export default ArticleDetails;
