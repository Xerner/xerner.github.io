import { SvgIcon, SvgIconProps } from "@material-ui/core";
import { ReactComponent as ItchIoIcon} from '../../graphics/itch-io.svg';

export default function ItchIo(props: SvgIconProps) {
  return <SvgIcon {...props}><ItchIoIcon/></SvgIcon>
}
