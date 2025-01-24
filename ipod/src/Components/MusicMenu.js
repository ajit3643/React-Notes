function MusicMenu() {
  return (
    <table id="music-menu">
      <tbody>
        <tr>
          <th className="table-heading">Music</th>
        </tr>
        <tr data-option="allSongs" className="active">
          <td className="table-item">All Songs</td>
        </tr>
        <tr data-option="artists">
          <td className="table-item">Artists</td>
        </tr>
        <tr data-option="albums">
          <td className="table-item">Albums</td>
        </tr>
      </tbody>
    </table>
  );
}

export default MusicMenu;
