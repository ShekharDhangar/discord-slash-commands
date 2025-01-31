import {
  createNewRole,
  discordMessageRequest,
  memberGroupRole,
} from "../../src/typeDefinitions/discordMessage.types";
import { InteractionType } from "discord-interactions";

export const dummyHelloMessage: discordMessageRequest = {
  type: InteractionType.APPLICATION_COMMAND,
  data: {
    name: "Hello",
  },
  member: {
    user: {
      id: 123456,
      username: "ritik",
      avatar: "d1eaa8f8ab5e8235e08e659aef5dfeac",
      discriminator: "1234",
    },
  },
  guild_id: 123456,
};

export const dummyVerifyMessage: discordMessageRequest = {
  type: InteractionType.APPLICATION_COMMAND,
  data: {
    name: "VERIFY",
  },
  member: {
    user: {
      id: 123456,
      username: "ritik",
      avatar: "d1eaa8f8ab5e8235e08e659aef5dfeac",
      discriminator: "1234",
    },
  },
  guild_id: 123456,
};

export const dummyCreateBody: createNewRole = {
  rolename: "test role",
  mentionable: true,
};

export const dummyAddRoleBody: memberGroupRole = {
  userid: "abcd1234",
  roleid: "defg5678",
};

export const guildEnv = {
  DISCORD_GUILD_ID: "1234",
  DISCORD_TOKEN: "abcd",
};

export const dummyGuildMemberDetails = {
  avatar: null,
  communication_disabled_until: null,
  flags: 0,
  joined_at: "2023-04-01T01:00:09.204000+00:00",
  nick: null,
  pending: false,
  premium_since: null,
  roles: [],
  user: {
    id: "12345678",
    username: "John Doe",
    avatar: "123abc123xyz",
    discriminator: "6818",
    public_flags: 64,
    flags: 64,
    banner: null,
    accent_color: 16721920,
    global_name: null,
    avatar_decoration: null,
    display_name: null,
    banner_color: "#ff2800",
  },
  mute: false,
  deaf: false,
};

export const transformedArgument = {
  roleToBeTaggedObj: {
    name: "role",
    type: 8,
    value: "1118201414078976192",
  },
  displayMessageObj: { name: "message", type: 3, value: "hello" },
};

export const onlyRoleToBeTagged = {
  roleToBeTaggedObj: {
    name: "role",
    type: 8,
    value: "1118201414078976192",
  },
};
