try {
  if (!isCommunityMember) {
    await addCommunityMember(userId, communityId);
    await addEventParticipant(eventId, userId);
    return {
      status: "success",
      message: "Join event and community success",
    };
  }
  await addEventParticipant(eventId, userId);
  return {
    status: "success",
    message: "Join event success",
  };
} catch (e) {
  return {
    status: "error",
    message: `${e.message}`,
  };
}
