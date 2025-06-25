/** biome-ignore-all lint/nursery/useUniqueElementIds: <> */
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Contact, List, Search } from "lucide-react";

export const Route = createFileRoute("/(private)/dashboard/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="dashboard-container">
			<div className="main-grid">
				<div className="card">
					<div className="card-header">
						<div className="card-icon">
							<Contact />
						</div>
						<h2 className="card-title">Pesquisar Funcionários</h2>
					</div>
					<div className="relative mb-5">
						<input
							type="text"
							className="w-full py-4 pr-5 pl-12 bg-gray-200 border-2 border-gray-100 rounded-xl transition-all focus:outline-none focus:border-[#667eea] focus:bg-white focus:shadow-search"
							placeholder="Digite o nome do funcionário..."
							id="employeeSearch"
						/>
						<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
							<Search />
						</span>
					</div>

					<p className="text-gray-600 text-xs mt-2.5">
						Encontre rapidamente informações de qualquer funcionário
					</p>
				</div>

				<div className="card">
					<div className="card-header">
						<div className="card-icon">
							<Clock />
						</div>
						<h2 className="card-title">Ocorrências Recentes</h2>
					</div>
					<div className="recent-items">
						<div className="recent-item">
							<div className="recent-item-content">
								<span className="recent-item-text">Atraso - João Silva</span>
								<span className="recent-item-time">Há 2 horas</span>
							</div>
						</div>

						<div className="recent-item">
							<div className="recent-item-content">
								<span className="recent-item-text">Falta - Maria Santos</span>
								<span className="recent-item-time">Há 5 horas</span>
							</div>
						</div>

						<div className="recent-item">
							<div className="recent-item-content">
								<span className="recent-item-text">
									Hora extra - Pedro Costa
								</span>
								<span className="recent-item-time">Ontem</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="occurrences-section">
				<div className="occurrences-card">
					<div className="occurrences-header">
						<div className="occurrences-title">
							<div className="card-icon">
								<List />
							</div>
							<h2 className="card-title">Todas as Ocorrências</h2>
						</div>
					</div>

					<div className="empty-state">
						<div className="empty-icon"></div>
						<h3>Nenhuma ocorrência selecionada</h3>
						<p>Selecione uma ocorrência da lista ou crie uma nova</p>
						<button type="button">+ Nova Ocorrência</button>
					</div>
				</div>
			</div>
		</main>
	);
}
