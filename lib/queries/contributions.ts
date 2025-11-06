export const CONTRIBUTIONS_QUERY = `
query {
  viewer {
    login

    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }

      # Repos the user contributed to (NOT OWNED)
      commitContributionsByRepository(maxRepositories: 100) {
        repository {
          name
          owner { login }
          stargazerCount
          collaborators(first: 10) {
            totalCount
          }
        }
      }

      pullRequestContributions {
        totalCount
      }

      issueContributions {
        totalCount
      }
    }
  }
}
`;
