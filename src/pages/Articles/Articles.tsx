import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import SkeletonLoader from "../../components/SkeletonLoader";
import Header from "../../components/Header";
import { useStyles } from "./useStyles";

const Articles = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const articles = useAppSelector((state) => state?.articles?.articles);
  const isLoading = useAppSelector((state) => state?.articles?.isLoading);
  const error = useAppSelector((state) => state?.articles?.error);
  console.log(error, "error is here only111");

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className={styles.articlesWrapper}>
      <Header />
      <main className={styles.main}>
        <Grid
          container
          sm={12}
          md={12}
          xs={12}
          mt={10}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {isLoading && !error ? (
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <SkeletonLoader />
              </Grid>
            ))
          ) : !isLoading && error ? (
            <div className={styles.error}>Something went wrong</div>
          ) : (
            !isLoading &&
            articles?.length > 0 &&
            articles?.map((article: any) => {
              return (
                <Grid
                  key={article?.id}
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    id={article?.id}
                    title={article?.title}
                    onArticleClick={() => handleArticleClick(article?.id)}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </main>
    </div>
  );
};

export default Articles;
