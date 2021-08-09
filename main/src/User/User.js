import PropType from "prop-types";
function UserData({ profileImg, name, nickname }) {
  console.log(profileImg);
  console.log(name);
  console.log(nickname);
}

UserData.protoTypes = {
  profileImg: PropType.string.isRequired,
  name: PropType.string.isRequired,
  name: PropType.string.isRequired,
};
