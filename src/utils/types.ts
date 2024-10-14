export interface UserDetails {
    _id: {
        $oid: string; // MongoDB Object ID
    };
    profile_id: string; // User profile ID or "student"
    parent_name: {
        first: string;
        last: string;
    };
    child_name: {
        first: string;
        last: string;
    };
    child_grade: string; // Grade of the child
    email: string;
    phone: string; // Phone number
    RequestFinancialAssistance: boolean; // Whether financial assistance is requested
    SchoolName: string; // Name of the school
    group: string; // Group or program
    level: string; // User's current level
    payment_status: string; // Payment status (e.g., "paid", "pending")
    image: string; // URL to the user's profile image
    device_name: string; // Device used by the user
    session_id: string; // Identifier for the user's current session

    registered_inschool_courses?: {
        course_title: string; // Title of the course
        status: string; // Status of the course (e.g., "Completed", "In Progress")
        completed: number; // Percentage of course completion
    }[];

    PuzzleArena?: {
        [category: string]: {
            [part: string]: {
                [puzzle: string]: {
                    started: boolean; // Whether the puzzle has started
                    option_guessed: boolean | null; // Option guessed by the user
                    timer: number; // Time spent on the puzzle
                    score: number; // Score achieved in the puzzle
                };
            };
        };
    };

    scores?: {
        Opening: number;
        Middlegame: number;
        Endgame: number;
        Mixed: number;
    };
}
