import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import UserType from "../types/UserType";

const useStyles = makeStyles((theme: Theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

interface PostProps {
  post: object | null,
	user: UserType | null,
	comments: object | null,
}

export default function Post(props: PostProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const togglePost = () => {
    setOpen(!open);
  };

	var initials: string;
	if (props.user === null) {
		initials = "??"
	} else {
		var initialsArr = props.user.name.split(' ');
		initials = initialsArr[0][0]+initialsArr[1][0];
	}

  return (
		<div>
			<ListItem button divider onClick={togglePost}>
				<ListItemAvatar>
					<Avatar></Avatar>
				</ListItemAvatar>
				<ListItemText primary="Inbox" secondary="hello" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemAvatar>
							<Avatar>{initials}</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Starred" />
					</ListItem>
				</List>
				<Divider light/>
			</Collapse>
		</div> 
  );
}
