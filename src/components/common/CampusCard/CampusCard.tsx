import React, { FC } from "react";
import { Card, Typography } from "@material-ui/core";

type Props = {
  title: string;
  subtitle: string;
};

const CampusCard: FC<Props> = () => {
  return <Card>
    <div>
      <Typography variant="h3" color="textPrimary">

      </Typography>
    </div>
    <div>

    </div>
  </Card>
};

export default CampusCard;
