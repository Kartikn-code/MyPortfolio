const GitHubStats = () => {
    return (
        <section className=" github container w-100% d-grid">
      <div className="github-section">
        <h2 style={{ textAlign: "center",color:"black",fontSize:"3rem"}}>GitHub Stats</h2>
       

        <img src="https://github-readme-stats.vercel.app/api?username=kartikn-code&show_icons=true&theme=radical" alt="GitHub Stats" width="350px" height="350px"/>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=kartikn-code&theme=radical" alt="GitHub Streak"  width="400px" height="400px"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kartikn-code&layout=compact&theme=radical" alt="Most Used Languages"  width="400px" height="400px" />
        <h2 style={{ textAlign: "center",color:"black",fontSize:"3rem"}}>GitHub Contributions</h2>
        <img src="https://github-readme-activity-graph.vercel.app/graph?username=kartikn-code&theme=react-dark" alt="GitHub Activity Graph"  width="400px" height="400px"/>
       

      
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        
            Hello
       
      </div>
      </section>
    );
  };
  
  export default GitHubStats;
  